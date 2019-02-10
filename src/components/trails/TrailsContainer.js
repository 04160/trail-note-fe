import { fetchTrails } from 'src/components/trails/TrailsContainer';

class TrailsContainer extends React.Component {
  state = {
    trails: []
  }

  componentDidMount() {
    fetchTrails(trails => this.setState())
  }
}
