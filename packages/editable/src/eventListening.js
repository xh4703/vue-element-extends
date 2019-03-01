import XEUtils from 'xe-utils'

// 监听全局事件
var eventStore = []
var EventListening = {
  on (comp, type, cb) {
    eventStore.push({ comp, type, cb })
  },
  off (comp, type) {
    XEUtils.remove(eventStore, item => item.comp === comp && item.type === type)
  },
  trigger (evnt) {
    eventStore.forEach(({ comp, type, cb }) => {
      if (type === evnt.type) {
        cb.call(comp, evnt)
      }
    })
  }
}

window.addEventListener('click', EventListening.trigger)

export default EventListening
