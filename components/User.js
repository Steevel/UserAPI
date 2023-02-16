/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Box, VStack, Divider, Image, Heading} from 'native-base';
import moment from 'moment/moment';

const User = ({details}) => {
  return (
    <Box border="1" borderRadius="md" style={styles.card}>
      <VStack space="4" divider={<Divider />}>
        <Box style={styles.boxStyle}>
          <Image
            source={{
              uri: `${details.picture?.large}`,
            }}
            alt="User Image"
            style={styles.image}
          />
        </Box>
        <Box style={styles.boxStyle}>
          <Heading size="xl" style={styles.heading}>
            {`${details.name?.title} ${details.name?.first} ${details.name?.last}`}
          </Heading>
        </Box>
        <Box px="4" style={styles.boxStyle}>
          <Text style={styles.heading}>Phone: {details.cell}</Text>
        </Box>
        <Box px="4" style={styles.boxStyle}>
          <Text style={styles.heading}>Email: {details.email}</Text>
        </Box>
        <Box px="4" pb="4" style={styles.boxStyle}>
          <Text style={styles.heading}>
            Registered at {moment(details.registered?.text).format('DD-MM-YY')}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
  },
  cardItem: {
    backgroundColor: '#4f8a8b',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fbd46d',
    marginTop: -60,
  },
  heading: {
    color: '#eeeeee',
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default User;
