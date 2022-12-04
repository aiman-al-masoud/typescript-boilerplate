export default class Clazz {

    static getCrap() {
        return 10000;
    }

    sidekickFunc() {
        this.faultyFunc()
    }

    faultyFunc() {
        throw new Error('willful error because error error error!')
    }
}