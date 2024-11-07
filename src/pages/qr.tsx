import { QRCodeCanvas } from "qrcode.react";

const QRCodePage: React.FC = () => {
    return (
        <div>x
            <h1>QR Code para Descarte de Resíduos Eletrônicos</h1>
            <QRCodeCanvas value="https://link-para-o-ponto-de-coleta" />
        </div>
    );
};


export default QRCodePage;
