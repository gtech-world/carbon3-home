import React, { FC, useState } from 'react';
import { Modal } from '@components/common/modal';
import { Table } from '@components/common/table';

const InventoryAddRealDataModal: FC<InventoryController.InventoryAddRealDataModalProps> = ({ onOpenModal }) => {
	const [tableData, setTableData] = useState<Record<string, any>[]>([{}, {}, {}]);

	const onAddInfo = () => {
		setTableData([...tableData, []]);
	};

	const onSubmit = () => {
		const table = document?.getElementById('realDataTable') as HTMLTableElement;
		const rows = table.getElementsByTagName('tr');
		const values = [];

		for (let i = 0; i < rows.length; i++) {
			const rowValues = [];
			const inputs = rows[i].getElementsByTagName('input');
			for (let j = 0; j < inputs.length; j++) {
				const da = ['name', 'id', 'type', 'data', 'inputData', 'res'];
				const keys = da[j];
				const inputValue = inputs[j].value;
				const obj = { [keys]: inputValue };
				rowValues.push(obj);
			}
			values.push(rowValues);
		}
		typeof onOpenModal === 'function' && onOpenModal();

		console.log('值-----', values.slice(1));
	};

	const columns = [
		{
			title: '参数名',
			dataIndex: 'loadNumber',
			width: '9rem',
			render: (text: string) => <input className='w-[9rem]  h-[40px] bg-[#F3F3F3]' />,
		},
		{
			title: '描述',
			dataIndex: 'productName',
			width: '5.5rem',
			render: (text: string) => <input className='w-[5.5rem]  h-[40px] bg-[#F3F3F3]' />,
		},
		{
			title: '过程名称',
			dataIndex: 'modelName',
			width: '7rem',
			render: (text: string) => <input className=' w-[7rem] h-[40px] bg-[#F3F3F3]' />,
		},

		{
			title: '类型',
			width: '5.5rem',
			dataIndex: 'createTime',
			render: (text: string) => <input className='w-[5.5rem]  h-[40px] bg-[#F3F3F3]' />,
		},
		{
			title: '参考值',
			width: '10rem',
			dataIndex: 'createTime',
			render: (text: string) => <input className='w-[10rem]  h-[40px] bg-[#F3F3F3]' />,
		},
		{
			title: '填入值',
			width: '10rem',
			dataIndex: 'createTime',
			render: (text: string) => <input className='w-[10rem] h-[40px] bg-[#F3F3F3]' />,
		},
	];

	return (
		<Modal
			title='实景数据填报'
			containerClassName={'mx-5 max-w-[1000px] '}
			titleClassName={'text-[20px] leading-5 font-bold'}
			onClose={(typeof onOpenModal === 'function' && onOpenModal) || undefined}>
			<div className='mx-5 max-w-[1000px] max-h-96 overflow-y-auto '>
				<Table
					columns={columns}
					tableId='realDataTable'
					columnsHeight={'h-[3.125rem]'}
					mouseHoverKey='id'
					data={tableData}
					isSetBorder={true}
					className=''
					headerClassName={{
						background: '#DDDDDD',
						position: 'sticky',
						top: '0',
						fontWeight: 'bold',
					}}
				/>
			</div>
			<div className='mx-5 '>
				<span
					onClick={() => onAddInfo()}
					className='text-[14px] font-normal leading-[21px] text-[#999999]'>
					+新增
				</span>
				<div className='flex flex-row justify-between gap-5 mt-5'>
					<div
						onClick={(typeof onOpenModal === 'function' && onOpenModal) || undefined}
						className=' cursor-pointer bg-[#29953A1A] w-[450px] text-[18px] border-2 border-[#29953A] font-normal text-[#29953A] flex h-[50px] rounded-lg justify-center items-center'>
						取消
					</div>
					<div
						onClick={() => onSubmit()}
						className='  cursor-pointer bg-[#29953A] w-[450px] text-[18px] font-normal  text-[#FFFFFF] flex h-[50px] rounded-lg justify-center items-center'>
						确定
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default InventoryAddRealDataModal;
