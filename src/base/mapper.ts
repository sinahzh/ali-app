export abstract class Mapper<I, O> {
    abstract mapForm(param: I): O;
    abstract mapTo(param: O): I;
}