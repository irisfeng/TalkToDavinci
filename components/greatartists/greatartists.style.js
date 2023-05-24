import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.medium,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  artistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.medium,
    borderBottomWidth: 0.5, 
    borderBottomColor: COLORS.gray, 
  },
  artistButton: {

    borderRadius: 5,
    padding: SIZES.small,
  },
  artistButtonText: {
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  artistName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    fontFamily: FONT.bold,
    color: COLORS.secondary,
  },
});

export default styles;



