
class TravelTracker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.trips = [];
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
        }
        th, td {
          border: 1px solid #ccc;
          padding: 0.5rem;
          text-align: left;
        }
        th {
          background-color: #f4f4f4;
        }
      </style>
      <div>
        <button id="start-trip">Start Trip</button>
        <button id="end-trip" disabled>End Trip</button>
        <div id="trip-log"></div>
      </div>
    `;

    this.shadowRoot.getElementById('start-trip').addEventListener('click', () => this.startTrip());
    this.shadowRoot.getElementById('end-trip').addEventListener('click', () => this.endTrip());
  }

  startTrip() {
    const now = new Date();
    this.currentTrip = { startTime: now };
    this.shadowRoot.getElementById('start-trip').disabled = true;
    this.shadowRoot.getElementById('end-trip').disabled = false;
  }

  endTrip() {
    const now = new Date();
    this.currentTrip.endTime = now;
    this.trips.push(this.currentTrip);
    this.currentTrip = null;
    this.shadowRoot.getElementById('start-trip').disabled = false;
    this.shadowRoot.getElementById('end-trip').disabled = true;
    this.updateTripLog();
  }

  updateTripLog() {
    const tripLog = this.shadowRoot.getElementById('trip-log');
    let tableHTML = `
      <h2>Trip Log</h2>
      <table>
        <thead>
          <tr>
            <th>Trip</th>
            <th>Start</th>
            <th>End</th>
            <th>Duration (seconds)</th>
          </tr>
        </thead>
        <tbody>
    `;
    this.trips.forEach((trip, index) => {
      const duration = (trip.endTime - trip.startTime) / 1000;
      tableHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${trip.startTime.toLocaleString()}</td>
          <td>${trip.endTime.toLocaleString()}</td>
          <td>${duration.toFixed(2)}</td>
        </tr>
      `;
    });
    tableHTML += `
        </tbody>
      </table>
    `;
    tripLog.innerHTML = tableHTML;
  }
}

customElements.define('travel-tracker', TravelTracker);
