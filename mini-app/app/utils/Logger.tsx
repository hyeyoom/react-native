export class Logger {
    private static readonly FORMAT = `[${new Date()}]`

    static info(message: string) { Logger.print(message, 'info') }
    static warn(message: string) { Logger.print(message, 'warn') }
    static debug(message: string) { Logger.print(message, 'debug') }
    static error(message: string) { Logger.print(message, 'error') }
    static trace(message: string) { Logger.print(message, 'trace') }

    private static print(message: string, level: string) {
        switch (level) {
            case 'info': console.info(`[INFO] ${Logger.FORMAT} - ${message}`); break
            case 'warn': console.warn(`[WARN] ${Logger.FORMAT} - ${message}`); break
            case 'debug': console.debug(`[DEBUG] ${Logger.FORMAT} - ${message}`); break
            case 'error': console.error(`[ERROR] ${Logger.FORMAT} - ${message}`); break
            case 'trace': console.trace(`[TRACE] ${Logger.FORMAT} - ${message}`); break
        }
    }
}
