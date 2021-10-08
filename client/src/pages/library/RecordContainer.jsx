import { useState, useEffect } from 'react';

import RecordList from './RecordList';
import NoRecord from './NoRecord';
import Backdrop from "../../components/block/Backdrop";
import BackToTop from '../../components/block/BackToTop';

import { useFetchRecordContext } from '../../context/FetchContext';


const RecordComponent = ({ state, setStateCount }) => {
    const { dataState } = useFetchRecordContext();

    const [records, setRecords] = useState([]);

    const [filteredRecords, setFilteredRecords] = useState([]);

    useEffect(() => {
        setRecords(dataState.data)
    }, [dataState])

    useEffect(() => {
        if (state === "all") setFilteredRecords(records);
        else setFilteredRecords(records.filter((record) => record.status === state));

        const lenWanted = records.filter((record) => record.status === "wanted").length;
        const lenReading = records.filter((record) => record.status === "reading").length;
        const lenRead = records.filter((record) => record.status === "read").length;
        setStateCount({ all: records.length, read: lenRead, reading: lenReading, wanted: lenWanted });
    }, [state, records, setStateCount])

    return (
        <>
            {dataState.isLoading ? <Backdrop open={dataState.isLoading} />
                : filteredRecords.length > 0 ? (
                    <RecordList
                        records={records}
                        setRecords={setRecords}
                        filteredRecords={filteredRecords}
                    />
                ) : <NoRecord />}
            <BackToTop />
        </>
    )
}

export default RecordComponent;