import type {PropsWithChildren, ReactElement} from 'react';
import {QRCodeSVG} from 'qrcode.react';

interface QRCodeProperties {
}

function QRCode(properties: PropsWithChildren<QRCodeProperties>):ReactElement{
  return <QRCodeSVG value="https://apps.apple.com/us/app/veew/id1490367142" />;
}

export default QRCode;
