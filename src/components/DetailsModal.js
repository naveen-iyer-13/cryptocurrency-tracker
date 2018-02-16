import React from 'react';
import Modal from 'antd/lib/modal'

const DetailsModal = props => {

  return (
    <Modal visible={props.isOpen} onCancel={() => props.closeModal()} title="Selected Cryptocurrency Details" footer={null}>
      <div style={{textAlign: 'center', marginBottom: 20, fontWeight: 700}}>
        {props.selectedRow.name} ({props.selectedRow.symbol})  #{props.selectedRow.rank}
      </div>
      <div>
        Price: {props.selectedRow.price_usd} ({props.selectedRow.percent_change_1h} %)
      </div>
      <div>
        Available Supply: {props.selectedRow.available_supply}
      </div>
      <div>
        Total Supply: {props.selectedRow.total_supply}
      </div>
      <div>
        Max Supply: {props.selectedRow.total_supply}
      </div>
    </Modal>
  );

}

export default DetailsModal;
