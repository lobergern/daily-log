const events = [
  {
    id: 'default-name',
    name: 'default name',
    notes: 'default note'
  },
  {
    id: 'default-name2',
    name: 'default name2',
    notes: 'default note2'
  }
];

export default class EventApi {
  static loadEvents() {
    return new Promise((resolve) => {
      resolve([...events]);
    });
  }

  static saveEvent(event) {
    event = Object.assign({}, event);
    return new Promise((resolve, reject) => {
      if (event.name.length < 1) {
        reject('Missing course name');
      }

      if (event.id) {
        let modifiedEvent = events.findIndex(arrayEvent => arrayEvent.id === event.id);
        events.slice(modifiedEvent, 1, event);
      }
      else {
        event.id = event.name.replace(/\s/g, '-');
        events.push(event);
      }
      resolve(event);
    });
  }
}
