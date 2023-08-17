window.addEventListener("DOMContentLoaded",() => {
    const pc = new Passcode(".passcode");
});

class Passcode {
    code = 1998; // enter this to unlock
    unlockTimeout = null;

    constructor(el) {
        this.form = document.querySelector(el);
        this.addEvents();
        this.init();
    }
    get digits() {
        return Array.from(this.form.querySelectorAll("[name^=digit]"));
    }
    get currentIndex() {
        return this.digits.findIndex(digit => digit === document.activeElement);
    }
    addEvents() {
        this.form?.addEventListener("click",this.enter.bind(this));
        this.form?.addEventListener("keydown",this.prevDigit.bind(this));
        this.form?.addEventListener("input",this.nextDigit.bind(this));
    }
    init() {
        // clear the digits (if not already)
        this.form.reset();
        // focus to first digit
        this.digits[0]?.focus();
    }
    enter(e) {
        if (e.target?.hasAttribute("data-enter") && !this.unlockTimeout) {
            // concatenate the digits…
            const inputDigits = this.digits.map(digit => digit.value).join("");
            // …and check them before unlocking
            if (inputDigits.length === 4 && +inputDigits === this.code) this.unlock();
            else this.unlockDeny();
        }
    }
    reset() {
        this.reverseCursor(true);
        // remove all form modifier classes
        this.form.className = this.form.classList.item(0);
        // initiate the form again
        this.init();
        // clean the timeout
        clearTimeout(this.unlockTimeout);
        this.unlockTimeout = null;
    }
    reverseCursor(reverse = false) {
        const reverseClass = "passcode--reverse";

        if (reverse === true) this.form.classList.add(reverseClass);
        else this.form.classList.remove(reverseClass);
    }
    prevDigit(e) {
        if (e.code === "Backspace" && !this.unlockTimeout) {
            this.reverseCursor(true);
            if (e.target.hasAttribute("data-enter")) {
                // clear and focus on the last digit
                const lastDigit = this.digits.at(-1);

                if (lastDigit) {
                    lastDigit.value = "";
                    lastDigit.focus();
                }
            } else {
                e.target.value = "";
                // find the previous digit input…
                const prevDigit = this.digits[this.currentIndex - 1];
                // …and move the focus it
                prevDigit?.focus();
            }
        }
    }
    nextDigit(e) {
        const value = parseInt(e.data);

        if (!isNaN(value) && value >= 0 && value <= 9 && !this.unlockTimeout) {
            this.reverseCursor();
            // find the next digit input…
            const nextDigit = this.digits[this.currentIndex + 1];
            // …and move the focus it (or the enter button if no more digits)
            if (nextDigit) nextDigit.focus();
            else this.form.querySelector("[data-enter]")?.focus();
        } else {
            e.target.value = "";
        }
    }
    unlock() {
        this.form.classList.add("passcode--granted");
        this.unlockTimeout = setTimeout(() => {
            // allow the digits to already be gone when the form reenters
            this.form.reset();
            this.unlockTimeout = setTimeout(this.reset.bind(this),750);
        },500);
    }
    unlockDeny() {
        this.form.classList.add("passcode--denied");
        this.unlockTimeout = setTimeout(this.reset.bind(this),500);
    }
}
