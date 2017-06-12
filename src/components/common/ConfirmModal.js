import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const ConfirmModal = ({ children, onAccept, onDecline, visible }) => {
  const { viewStyle, cardSectionStyle, textStyle } = styles;

  return (
    <Modal
      animationType='slide'
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={viewStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={onDecline}>No</Button>
        </CardSection>

      </View>
    </Modal>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },

  cardSectionStyle: {
    justifyContent: 'center'
  },

  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  }
};

export { ConfirmModal };
