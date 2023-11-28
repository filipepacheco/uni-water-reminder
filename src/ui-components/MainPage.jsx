/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function MainPage(props) {
  const { frame438, redirectUrl, overrides, ...rest } = props;
  const frameThreeTwoTwoOnClick = useNavigateAction({ type: "url", url: "" });
  const linkThreeNineSevenThreeTwoThreeFiveSixOnClick = useNavigateAction({
    type: "url",
    url: redirectUrl,
  });
  const linkThreeNineSevenThreeTwoThreeSixZeroOnClick = useNavigateAction({
    type: "url",
    url: redirectUrl,
  });
  const linkThreeNineSevenThreeTwoThreeSixFourOnClick = useNavigateAction({
    type: "url",
    url: redirectUrl,
  });
  return (
    <View
      width="1922px"
      height="1004px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MainPage")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="1845px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBarHeader")}
      >
        <View
          width="127.88px"
          height="18.91px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "LogoWithText")}
        >
          <Text
            fontFamily="Inika"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="-27.04px"
            left="-22px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Uni&#x2028;Water&#x2028;Reminder"
            {...getOverrideProps(overrides, "Uni\u2028Water\u2028Reminder")}
          ></Text>
        </View>
        <Flex
          gap="32px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 32139732345")}
        >
          <View
            width="24px"
            height="24px"
            {...getOverrideProps(overrides, "MyIcon39732346")}
          ></View>
          <Image
            width="45px"
            height="45px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="239px"
        height="337px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="93px"
        left="0px"
        padding="32px 0px 32px 0px"
        {...getOverrideProps(overrides, "SideBar")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 32px 0px 32px"
          {...getOverrideProps(overrides, "Frame 32139732349")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            onClick={() => {
              frameThreeTwoTwoOnClick();
            }}
            {...getOverrideProps(overrides, "Frame 322")}
          >
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              borderRadius="4px"
              padding="6px 6px 6px 6px"
              backgroundColor="rgba(233,249,252,1)"
              {...getOverrideProps(overrides, "icon39732351")}
            >
              <View
                width="18px"
                height="18px"
                {...getOverrideProps(overrides, "MyIcon39732352")}
              ></View>
            </Flex>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(4,125,149,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Home"
              {...getOverrideProps(overrides, "label39732353")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Section")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Manage"
              {...getOverrideProps(overrides, "label39732355")}
            ></Text>
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              onClick={() => {
                linkThreeNineSevenThreeTwoThreeFiveSixOnClick();
              }}
              {...getOverrideProps(overrides, "link39732356")}
            >
              <Flex
                gap="0"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="4px"
                padding="6px 6px 6px 6px"
                backgroundColor="rgba(233,249,252,1)"
                {...getOverrideProps(overrides, "icon39732357")}
              >
                <View
                  width="18px"
                  height="18px"
                  {...getOverrideProps(overrides, "MyIcon39732358")}
                ></View>
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(4,125,149,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="My reminders"
                {...getOverrideProps(overrides, "label39732359")}
              ></Text>
            </Flex>
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              onClick={() => {
                linkThreeNineSevenThreeTwoThreeSixZeroOnClick();
              }}
              {...getOverrideProps(overrides, "link39732360")}
            >
              <Flex
                gap="0"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="4px"
                padding="6px 6px 6px 6px"
                backgroundColor="rgba(233,249,252,1)"
                {...getOverrideProps(overrides, "icon39732361")}
              >
                <View
                  width="18px"
                  height="18px"
                  {...getOverrideProps(overrides, "MyIcon39732362")}
                ></View>
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(4,125,149,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="100px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="My profile"
                {...getOverrideProps(overrides, "label39732363")}
              ></Text>
            </Flex>
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              onClick={() => {
                linkThreeNineSevenThreeTwoThreeSixFourOnClick();
              }}
              {...getOverrideProps(overrides, "link39732364")}
            >
              <Flex
                gap="0"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="4px"
                padding="6px 6px 6px 6px"
                backgroundColor="rgba(233,249,252,1)"
                {...getOverrideProps(overrides, "icon39732365")}
              >
                <View
                  width="18px"
                  height="18px"
                  {...getOverrideProps(overrides, "MyIcon39732366")}
                ></View>
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(4,125,149,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="My history"
                {...getOverrideProps(overrides, "label39732367")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <View
        width="1645px"
        height="911px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="93px"
        left="200px"
        padding="0px 0px 0px 0px"
        children={frame438}
        {...getOverrideProps(overrides, "Frame 438")}
      ></View>
    </View>
  );
}
