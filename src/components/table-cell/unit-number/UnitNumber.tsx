import './UnitNumber.css';
import Tooltip from '@mui/material/Tooltip';
import Reserved from './Reserved';
import PlannedToolTip from '../../tool-tip/PlannedToolTip';
import { Reserve } from '../../../interface/reserve.interface';


function UnitNumber({ unit_number, is_active, reserve, pre_booked }: { unit_number: string, is_active: boolean, reserve: Reserve, pre_booked: boolean })
{
    return (
        <td className='unit-information'>
            <div className={`unit-number ${is_active ? 'active-unit' : 'not-active-unit'}`}>{unit_number}</div> 
            <Reserved reserve={reserve} />           
            {
                pre_booked &&
                <Tooltip 
                    title={<PlannedToolTip pro_number="AAA" owner="Percy J."/>}
                    placement="top"
                    arrow
                >
                <div className="pre-booked">Planned</div>
                </Tooltip>
}
        </td>
    );
}


export default UnitNumber;