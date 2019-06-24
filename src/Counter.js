class Counter {

    constructor(start = 0, end = 10, step = 1) {
        this.reset(start, end, step);

        // Events
        this.onStart = null;
        this.onChange = null;
        this.onComplete = null;
    }


    get count() {
        return this._count;
    }

    run() {
        if(typeof this.onStart === 'function') {
            this.onStart(this);
        }
        for(this._count = this._start; this._count < this._end; this._count += this._step) {
            if(typeof this.onChange === 'function') {
                this.onChange(this);
            }
        }
        if(typeof this.onComplete === 'function') {
            this.onComplete(this);
        }
    }



    reset(start = 0, end = 10, step = 1) {
        this._start = start;
        this._end = end;
        this._step = step;
        this._count = 0;
    }
}


export default Counter;