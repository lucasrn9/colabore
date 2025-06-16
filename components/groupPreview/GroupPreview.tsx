import React from 'react';
import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  PressableProps,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import ImagePreview from '../imagePreview/ImagePreview';

interface GroupPreviewProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  groupName: string;
  activity: string;
  date: string;
  photo: ImageSourcePropType | undefined;
}

function GroupPreview({
  style,
  groupName,
  activity,
  date,
  photo,
  ...rest
}: GroupPreviewProps) {
  const [dataContainerWidth, setDataContainerWidth] = React.useState(0);
  return (
    <Pressable
      {...rest}
      style={[styles.container, style]}
      accessibilityLabel="Group Preview">
      <ImagePreview>
        <Image source={photo} accessibilityLabel="Group image preview" />
      </ImagePreview>
      <View
        style={styles.dataContainer}
        onLayout={e => setDataContainerWidth(e.nativeEvent.layout.width)}>
        <Text
          style={[styles.groupName, {maxWidth: dataContainerWidth}]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {groupName}
        </Text>
        <Text
          style={[styles.activity, {maxWidth: dataContainerWidth}]}
          numberOfLines={2}
          ellipsizeMode="tail">
          {activity}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 17,
  },
  dataContainer: {
    marginLeft: 17,
    display: 'flex',
    gap: 5,
    flexGrow: 1,
  },
  groupName: {fontFamily: 'Inter_24pt-SemiBold', fontSize: 17, lineHeight: 22},
  activity: {
    fontFamily: 'Inter_24pt-Regular',
    fontSize: 14,
    lineHeight: 18,
  },
  date: {
    fontFamily: 'Inter_24pt-ExtraLight',
    fontSize: 12,
    marginLeft: 'auto',
    lineHeight: 16,
  },
});

export default GroupPreview;
