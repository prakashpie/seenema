const formatDate = {
  methods: {
    formatDate(val) {
      if (!val) {
        return ''
      }
      const dateObj = new Date(val)
      let m = dateObj.getMonth()
      let d = dateObj.getDate()
      const y = dateObj.getFullYear()
      const fm = 'yyyy-MM-dd'
      m = ('0' + (parseInt(m) + 1)).slice(-2)
      d = ('0' + d).slice(-2)
      const p = fm
        .replace('yyyy', y)
        .replace('YYYY', y)
        .replace('mm', m)
        .replace('MM', m)
        .replace('DD', d)
        .replace('dd', d)
      return p
    },
    materialDate(val, time = true) {
      if (!val) {
        return ''
      }
      const dateObj = new Date(val)
      let d = dateObj.getDate()
      let min = dateObj.getMinutes()
      let sec = dateObj.getSeconds()
      let hour = dateObj.getHours()
      let mid = 'AM'
      const y = dateObj.getFullYear()
      const materialFormat = 'month DD, YYYY, 00:00:00 AM'
      const materialFormatWithoutTime = 'month DD, YYYY'
      if (hour === 0) {
        // At 00 hours we need to show 12 am
        hour = 12
      } else if (hour > 12) {
        hour = hour % 12
        mid = 'PM'
      }
      d = ('0' + d).slice(-2)
      min = ('0' + min).slice(-2)
      sec = ('0' + sec).slice(-2)
      hour = ('0' + hour).slice(-2)
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      if (time) {
        return materialFormat
          .replace('YYYY', y)
          .replace('month', months[dateObj.getMonth()])
          .replace('DD', d)
          .replace('00:00:00', `${hour}:${min}:${sec}`)
          .replace('AM', mid)
      }
      return materialFormatWithoutTime
        .replace('YYYY', y)
        .replace('month', months[dateObj.getMonth()])
        .replace('DD', d)
    }
  }
}
export default formatDate
