import React from 'react'
import QRCode from "react-qr-code";

const QrCodeModal = ({ QrData }) => {
  return (
    <QRCode 
    size={1000}
    style={{ height: "400px", width: "500px"  }}
    level='L'
    value={JSON.stringify(QrData)}
    viewBox={`0 0 1000 1000`}
    />
  )
}

export default QrCodeModal