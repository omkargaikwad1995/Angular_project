import { Pipe, PipeTransform } from "@angular/core";


@Pipe(
    {name:'hyphen_convertor_pipe'}
)

export class HyphenConvertorPipe implements PipeTransform
{
    transform(value:string,defaultReplace=":") {
        return value.replace('_', defaultReplace)
    }

}