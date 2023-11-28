/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function LoginPage(props) {
  const { Formulario, frame4381, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="1024px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LoginPage")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="600px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 60px 16px 60px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <View
          width="480px"
          height="353px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children={frame4381}
          {...getOverrideProps(overrides, "Frame 4381")}
        ></View>
      </Flex>
      <Flex
        gap="48px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="60px 60px 60px 60px"
        backgroundColor="rgba(57,187,248,1)"
        {...getOverrideProps(overrides, "Frame 3")}
      >
        <View
          width="722px"
          height="400px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 4382")}
        >
          <Text
            fontFamily="Inter"
            fontSize="40px"
            fontWeight="600"
            color="rgba(233,249,252,1)"
            lineHeight="60px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="722px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="140px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Welcome to Water Reminder!&#x2028;Drink Water & Live Better"
            {...getOverrideProps(
              overrides,
              "Welcome to Water Reminder!\u2028Drink Water & Live Better"
            )}
          ></Text>
        </View>
      </Flex>
    </Flex>
  );
}
