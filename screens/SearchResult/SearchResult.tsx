import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { TextCustom, ViewCustom } from '../../components';
import { FontWeight } from '../../components/Text/TextCustom';
import WeatherController from '../../controllers/WeatherController';
import { addDate, formatDate } from '../../helpers/DateHelpers';
import useFetch from '../../hooks/useFetch';
import { Weather } from '../../interfaces/Weather';
import { getIcon } from '../../helpers/WeatherHelpers';
import styles from './styles';

const SearchResult = () => {
  const { params } = useRoute();
  const { request } = useFetch();
  const [data, setData] = useState<Weather[]>([]);

  const { location, date } = params;

  const nextFiveDays = [
    formatDate(date),
    formatDate(addDate(date, 1)),
    formatDate(addDate(date, 2)),
    formatDate(addDate(date, 3)),
    formatDate(addDate(date, 4)),
  ];

  const search = async () => {
    const weathers = [];
    nextFiveDays?.map(async d => {
      const result = await request<Weather[]>(
        WeatherController.fetchLocationDay,
        {
          woeid: location.woeid,
          date: d,
        },
      );
      weathers.push(result[0]);
    });
    setData(weathers);
  };

  useEffect(() => {
    search();
    return () => setData([]);
  }, []);

  return (
    <ViewCustom
      styles={{ flex: 1, justifyContent: 'flex-start', width: '100%' }}
    >
      <FlatList
        data={data}
        keyExtractor={item => `${item.id}${item.applicable_date}`}
        style={{ width: '100%' }}
        renderItem={({ item }) => {
          const Icon = getIcon(item.weather_state_abbr);
          return (
            <View style={styles.listItemContainer}>
              <Icon width={50} />
              <View style={{ marginHorizontal: 20 }}>
                <TextCustom weight={FontWeight.semibold}>
                  {item.weather_state_name}
                </TextCustom>
                <TextCustom>{`Max: ${parseInt(item.max_temp)} C`}</TextCustom>
                <TextCustom>{`Min: ${parseInt(item.min_temp)} C`}</TextCustom>
                <TextCustom>{formatDate(item.applicable_date)}</TextCustom>
              </View>
            </View>
          );
        }}
      />
    </ViewCustom>
  );
};

export default SearchResult;
