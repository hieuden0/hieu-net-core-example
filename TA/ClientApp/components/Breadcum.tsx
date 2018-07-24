import * as React from 'react';
import { RouteComponentProps } from 'react-router';



export class Breadcum extends React.Component {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div className="container">
        <ul className="list-unstyled">
            <li>
                Tủ
            </li>
            <li>
                <a href="" title="Tủ">Tủ</a>
            </li>
            <li>
                Bàn
            </li>
            <li>
                <a href="" title="Tủ">Tủ</a>
            </li>
            <li>
                Ghế
            </li>
            <li>
                <a href="" title="Tủ">Tủ</a>
            </li>
        </ul>
    </div>
    }
}
