import React, { useCallback, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TextInput, TouchableOpacity, View,
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { useTheme, useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import { WeatherIcon } from '../../assets';
import { TextCustom, ViewCustom } from '../../components';
import { FontSize, FontWeight } from '../../components/Text/TextCustom';
import useFetch from '../../hooks/useFetch';
import strings from '../../Localization';
import styles from './styles';
import WeatherController from '../../controllers/WeatherController';
import LoadingIndicator from '../../components/LoadingIndicator';
import { formatDate } from '../../helpers/DateHelpers';
import NavigationConstants from '../../constants/NavigationConstants';
import { SCREEN_HEIGHT } from '../../helpers/ScreenHelpers';

const Home = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();
  const datePicker = useRef<any>();
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [hideResults, setHideResults] = useState<boolean>(false);
  const [location, setLocation] = useState<Location>();
  const [locations, setLocations] = useState<Location[]>([]);
  const [date, setDate] = useState<Date>(new Date());
  const [locationValue, setLocationValue] = useState<string>();

  const { request, isLoading } = useFetch();

  const onChange = useCallback(async (text: string) => {
    setHideResults(false);
    setLocationValue(text);
    const result = await request<Location[]>(
      WeatherController.fetchLocations,
      { text },
    );
    setLocations(result);
  }, []);

  const onChangeDate = (newDate : Date) => {
    datePicker?.current?.blur?.();
    setShowDatePicker(false);
    setDate(newDate);
  };

  const handleItemPress = (item) => {
    setLocationValue(item.title);
    setLocation(item);
    setHideResults(true);
  };

  const onSearch = () => {
    navigate(NavigationConstants.results, { location, date });
  };

  const WeatherItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleItemPress(item)}
      style={{ marginVertical: 5, padding: 5 }}
    >
      <TextCustom weight={FontWeight.semibold}>
        {`${item.title}`}
      </TextCustom>
    </TouchableOpacity>
  );

  return (
    <ViewCustom styles={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'position'}
        style={{ width: '100%', height: SCREEN_HEIGHT }}
      >
        <View style={{ alignItems: 'center' }}>
          <TextCustom size={FontSize.big} weight={FontWeight.bold}>
            {strings.general.appName}
          </TextCustom>
          <WeatherIcon />
        </View>
        <View style={{ width: '100%' }}>
          <View style={{ marginBottom: 10, zIndex: 2 }}>
            <TextCustom
              size={FontSize.regular}
              weight={FontWeight.semibold}
            >
              {`${strings.home.location}:`}
            </TextCustom>
            <View>
              <View style={styles.autocompleteContainer}>
                <Autocomplete
                  data={locations?.length > 0 ? locations : []}
                  value={locationValue}
                  onChangeText={onChange}
                  hideResults={hideResults}
                  placeholder={strings.home.location}
                  flatListProps={{
                    keyExtractor: (_, idx) => `${idx}`,
                    renderItem: isLoading ? LoadingIndicator : WeatherItem,
                  }}
                  style={{ padding: 10 }}
                  inputContainerStyle={[styles.input, { padding: 0, borderColor: colors.border }]}
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: '15%' }}>
            <TextCustom
              size={FontSize.regular}
              weight={FontWeight.semibold}
            >
              {`${strings.home.date}:`}
            </TextCustom>
            <TextInput
              ref={datePicker}
              style={styles.input}
              onFocus={() => setShowDatePicker(true)}
              onBlur={() => setShowDatePicker(false)}
              value={formatDate(date)}
            />
          </View>
        </View>
        {showDatePicker && (
        <DatePicker
          modal
          open={showDatePicker}
          date={date}
          mode="date"
          onConfirm={onChangeDate}
          onCancel={() => {
            setShowDatePicker(false);
            datePicker.current.blur();
          }}
        />
        )}
        <TouchableOpacity
          disabled={!location}
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={onSearch}
        >
          <TextCustom weight={FontWeight.semibold} color={colors.textOnPrimary}>
            {strings.general.search}
          </TextCustom>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ViewCustom>
  );
};

export default Home;
