import { useState, useEffect } from 'react'

import RecordList from './RecordList';
import NoRecord from './NoRecord';

import { useFetchRecordContext } from '../../context/FetchContext';

const RecordComponent = ({ state }) => {
    const { dataState } = useFetchRecordContext();

    const [records, setRecords] = useState([]);

    const [filteredRecords, setFilteredRecords] = useState([]);


    const filterHandler = () => {
        switch (state) {
            case "wanted":
                setFilteredRecords(records.filter((record) => record.status === "wanted"));
                break;
            case "reading":
                setFilteredRecords(records.filter((record) => record.status === "reading"));
                break;
            case "read":
                setFilteredRecords(records.filter((record) => record.status === "read"));
                break;
            default:
                setFilteredRecords(records);
                break;
        }
    };

    useEffect(() => {
        console.log('Year!')
        setRecords(dataState.data)
        console.log(dataState.data)
    }, [dataState])

    useEffect(() => {
        console.log("filter")
        filterHandler()
        console.log(state)
    }, [records, state])

    return (
        <>
            {filteredRecords.length > 0 ? (
                <RecordList
                    records={records}
                    setRecords={setRecords}
                    filteredRecords={filteredRecords}
                />
            ) : <NoRecord />}
        </>
    )
}

export default RecordComponent;