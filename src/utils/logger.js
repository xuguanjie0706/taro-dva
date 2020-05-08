
import dayjs from 'dayjs'

const defaults = {
  level: "log",
  logger: console,
  logErrors: true,
  colors: {
    title: 'inherit',
    req: '#9E9E9E',
    res: '#4CAF50',
    error: '#F20404',
  }
}


function printBuffer(logEntry, options = defaults) {
  const { logger, colors } = options
  let { title, started = new Date(), req, res } = logEntry

  /* Message */
  const headerCSS = ['color: gray; font-weight: lighter;']
  const styles = s => `color: ${s}; font-weight: bold`

  /* render */
  logger.group(`%c ${title} @${dayjs(started).format("YYYY-MM-DD HH:mm:ss")}`, ...headerCSS)
  logger.log('%c req', styles(colors.req), req)
  logger.log('%c res', styles(colors.res), res)
  logger.groupEnd()
}



export default printBuffer