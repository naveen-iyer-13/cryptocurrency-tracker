import React, {Component} from 'react'
import {connect} from 'react-redux'
import './styles/list.css'
import Table from 'antd/lib/table'
import DetailsModal from './components/DetailsModal'
import columns from './constants'
import 'antd/dist/antd.css';
import {getData} from './redux/actions'

class List extends Component{
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      selectedRow: []
    }
    this.closeModal=this.closeModal.bind(this)
  }

  componentDidMount() {
    setInterval(() => this.props.dispatch(getData()), 20000)
  }

  closeModal() {
    this.setState({isOpen: false})
  }

  onSelectRow(selectedRow) {
    this.setState({selectedRow: selectedRow, isOpen: true})
  }

  render(){
    // console.log(this.props.details);
    return(
      <div style={{padding: '100px'}} className="container">
        <Table
          dataSource={this.props.details}
          columns={columns}
          bordered={true}
          rowKey="name"
          onRow={(row) => {
          return {
            onClick: () => {this.onSelectRow(row)},
          };
        }}
        />
        <DetailsModal selectedRow={this.state.selectedRow} closeModal={this.closeModal} isOpen={this.state.isOpen}/>
      </div>
    );
  }
}

export default connect(state => state)(List);
