/** */
export const escapeRegExp = ( text: string ) => text.replace( /[-/\\^$*+?.()|[\]{}]/g, '\\$&' )
export const escapeMarkdownV2 = ( text: string ) => text.replace( /[\\_*[\]()~`>#+\-=|{}.!]/g, '\\$&' )

/** */
export const declination = ( number: number, forms: [string, string, string] ) => {
  const cases = [ 2, 0, 1, 1, 1, 2 ]
  return forms[ number % 100 > 4 && number % 100 < 20 ? 2 : cases[ number % 10 < 5 ? number % 10 : 5 ] ]
}

/** */
export const pluralize = ( number: number, forms: [string, string] ) => {
  return number === 1 ? forms[ 0 ] : forms[ 1 ]
}

/** */
export interface InterpolateTemplateOptions {
  delimiters?: [string, string]
}
export const interpolateTemplate = (
  template: string,
  payload: Record<string, string | number>,
  options?: InterpolateTemplateOptions,
) => {
  const [ startDelimiter, endDelimiter ] = options?.delimiters || [ '{{', '}}' ]
  const regex = new RegExp( `${escapeRegExp( startDelimiter )}(\\w+)${escapeRegExp( endDelimiter )}`, 'g' )
  return template.replace( regex, ( match, key ) => String( payload[ key ] || match ) )
}

/** */
export const secondsToTimeString = ( seconds: number, format: string = 'hh:mm:ss' ) => {
  const hoursCount: number = Math.floor( seconds / 3600 )
  const minutesCount: number = Math.floor( ( seconds % 3600 ) / 60 )
  const secondsCount: number = seconds % 60
  const values: Record<string, string> = {
    hh: hoursCount.toString().padStart( 2, '0' ),
    mm: minutesCount.toString().padStart( 2, '0' ),
    ss: secondsCount.toString().padStart( 2, '0' ),
  }
  return format.replace( /hh|mm|ss/g, ( match ) => values[ match ] || match )
}

/** */
export interface IsArrayOptions {
  minLength?: number
}
export const isArray = ( value: unknown, options?: IsArrayOptions ) => {
  return Array.isArray( value ) && value.length >= ( options?.minLength || 0 )
}