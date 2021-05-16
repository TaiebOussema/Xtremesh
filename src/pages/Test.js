/* eslint-disable */

import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SettingsNotifications from 'src/components/settings/SettingsNotifications';
import SettingsPassword from 'src/components/settings/SettingsPassword';
import {Host} from 'src/components/test/Host';

import {connect} from 'react-redux';
import { useEffect } from 'react';
import { fetchHosts } from 'src/redux/actions/hostsActions';
import { fetchAuth } from 'src/redux/actions/authActions';


const Test = ({dispatch, hosts, auth, loading, hasErrors}) => {
   
    useEffect(() => {
        dispatch(fetchHosts());
        dispatch(fetchAuth());
    }, [dispatch]);
    
    const renderHosts = () => {
        if (loading) return <p>LOADING ...</p>;
        if (hasErrors) return <p>Error NO HOSTS</p>;
        return <p>{auth}</p>
    }


    return (
      <>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3,
            zoom: '80%'
            }}
        >
            {renderHosts()}
        </Box>
      </>
    )
  
};


const mapStateToProps = (state) => ({
    loading: state.hosts.loading,
    hosts: state.hosts.hosts,
    auth: state.auth.auth,
    hasErrors: state.hosts.hasErrors
});

export default connect(mapStateToProps)(Test);


