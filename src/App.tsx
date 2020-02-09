import { Component, Vue } from "vue-property-decorator";
import Calendar from "./components/Calendar";
import Tasks from "./components/Tasks";

import "./App.css";

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <Calendar />
        <Tasks />
      </div>
    );
  }
}