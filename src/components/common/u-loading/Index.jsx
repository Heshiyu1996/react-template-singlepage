import React from 'react';
import { Skeleton } from 'antd';

const ULoading = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <Skeleton paragraph={{ rows: 24 }} active />;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
};

export default ULoading;
