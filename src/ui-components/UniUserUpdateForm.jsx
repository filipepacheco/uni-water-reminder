/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUniUser, listHistories, listReminders } from "../graphql/queries";
import {
  updateHistory,
  updateReminder,
  updateUniUser,
} from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UniUserUpdateForm(props) {
  const {
    id: idProp,
    uniUser: uniUserModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    birthdate: "",
    weight: "",
    Histories: [],
    Reminders: [],
    email: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [birthdate, setBirthdate] = React.useState(initialValues.birthdate);
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [Histories, setHistories] = React.useState(initialValues.Histories);
  const [HistoriesLoading, setHistoriesLoading] = React.useState(false);
  const [historiesRecords, setHistoriesRecords] = React.useState([]);
  const [Reminders, setReminders] = React.useState(initialValues.Reminders);
  const [RemindersLoading, setRemindersLoading] = React.useState(false);
  const [remindersRecords, setRemindersRecords] = React.useState([]);
  const [email, setEmail] = React.useState(initialValues.email);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = uniUserRecord
      ? {
          ...initialValues,
          ...uniUserRecord,
          Histories: linkedHistories,
          Reminders: linkedReminders,
        }
      : initialValues;
    setName(cleanValues.name);
    setBirthdate(cleanValues.birthdate);
    setWeight(cleanValues.weight);
    setHistories(cleanValues.Histories ?? []);
    setCurrentHistoriesValue(undefined);
    setCurrentHistoriesDisplayValue("");
    setReminders(cleanValues.Reminders ?? []);
    setCurrentRemindersValue(undefined);
    setCurrentRemindersDisplayValue("");
    setEmail(cleanValues.email);
    setErrors({});
  };
  const [uniUserRecord, setUniUserRecord] = React.useState(uniUserModelProp);
  const [linkedHistories, setLinkedHistories] = React.useState([]);
  const canUnlinkHistories = false;
  const [linkedReminders, setLinkedReminders] = React.useState([]);
  const canUnlinkReminders = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUniUser.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUniUser
        : uniUserModelProp;
      const linkedHistories = record?.Histories?.items ?? [];
      setLinkedHistories(linkedHistories);
      const linkedReminders = record?.Reminders?.items ?? [];
      setLinkedReminders(linkedReminders);
      setUniUserRecord(record);
    };
    queryData();
  }, [idProp, uniUserModelProp]);
  React.useEffect(resetStateValues, [
    uniUserRecord,
    linkedHistories,
    linkedReminders,
  ]);
  const [currentHistoriesDisplayValue, setCurrentHistoriesDisplayValue] =
    React.useState("");
  const [currentHistoriesValue, setCurrentHistoriesValue] =
    React.useState(undefined);
  const HistoriesRef = React.createRef();
  const [currentRemindersDisplayValue, setCurrentRemindersDisplayValue] =
    React.useState("");
  const [currentRemindersValue, setCurrentRemindersValue] =
    React.useState(undefined);
  const RemindersRef = React.createRef();
  const getIDValue = {
    Histories: (r) => JSON.stringify({ id: r?.id }),
    Reminders: (r) => JSON.stringify({ id: r?.id }),
  };
  const HistoriesIdSet = new Set(
    Array.isArray(Histories)
      ? Histories.map((r) => getIDValue.Histories?.(r))
      : getIDValue.Histories?.(Histories)
  );
  const RemindersIdSet = new Set(
    Array.isArray(Reminders)
      ? Reminders.map((r) => getIDValue.Reminders?.(r))
      : getIDValue.Reminders?.(Reminders)
  );
  const getDisplayValue = {
    Histories: (r) => `${r?.amount ? r?.amount + " - " : ""}${r?.id}`,
    Reminders: (r) => `${r?.periodicity ? r?.periodicity + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    birthdate: [],
    weight: [],
    Histories: [],
    Reminders: [],
    email: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const fetchHistoriesRecords = async (value) => {
    setHistoriesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ amount: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listHistories.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listHistories?.items;
      var loaded = result.filter(
        (item) => !HistoriesIdSet.has(getIDValue.Histories?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setHistoriesRecords(newOptions.slice(0, autocompleteLength));
    setHistoriesLoading(false);
  };
  const fetchRemindersRecords = async (value) => {
    setRemindersLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { periodicity: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listReminders.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listReminders?.items;
      var loaded = result.filter(
        (item) => !RemindersIdSet.has(getIDValue.Reminders?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setRemindersRecords(newOptions.slice(0, autocompleteLength));
    setRemindersLoading(false);
  };
  React.useEffect(() => {
    fetchHistoriesRecords("");
    fetchRemindersRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name: name ?? null,
          birthdate: birthdate ?? null,
          weight: weight ?? null,
          Histories: Histories ?? null,
          Reminders: Reminders ?? null,
          email: email ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const promises = [];
          const historiesToLink = [];
          const historiesToUnLink = [];
          const historiesSet = new Set();
          const linkedHistoriesSet = new Set();
          Histories.forEach((r) => historiesSet.add(getIDValue.Histories?.(r)));
          linkedHistories.forEach((r) =>
            linkedHistoriesSet.add(getIDValue.Histories?.(r))
          );
          linkedHistories.forEach((r) => {
            if (!historiesSet.has(getIDValue.Histories?.(r))) {
              historiesToUnLink.push(r);
            }
          });
          Histories.forEach((r) => {
            if (!linkedHistoriesSet.has(getIDValue.Histories?.(r))) {
              historiesToLink.push(r);
            }
          });
          historiesToUnLink.forEach((original) => {
            if (!canUnlinkHistories) {
              throw Error(
                `History ${original.id} cannot be unlinked from UniUser because userID is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateHistory.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    userID: null,
                  },
                },
              })
            );
          });
          historiesToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateHistory.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    userID: uniUserRecord.id,
                  },
                },
              })
            );
          });
          const remindersToLink = [];
          const remindersToUnLink = [];
          const remindersSet = new Set();
          const linkedRemindersSet = new Set();
          Reminders.forEach((r) => remindersSet.add(getIDValue.Reminders?.(r)));
          linkedReminders.forEach((r) =>
            linkedRemindersSet.add(getIDValue.Reminders?.(r))
          );
          linkedReminders.forEach((r) => {
            if (!remindersSet.has(getIDValue.Reminders?.(r))) {
              remindersToUnLink.push(r);
            }
          });
          Reminders.forEach((r) => {
            if (!linkedRemindersSet.has(getIDValue.Reminders?.(r))) {
              remindersToLink.push(r);
            }
          });
          remindersToUnLink.forEach((original) => {
            if (!canUnlinkReminders) {
              throw Error(
                `Reminder ${original.id} cannot be unlinked from UniUser because userID is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateReminder.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    userID: null,
                  },
                },
              })
            );
          });
          remindersToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateReminder.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    userID: uniUserRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            name: modelFields.name ?? null,
            birthdate: modelFields.birthdate ?? null,
            weight: modelFields.weight ?? null,
            email: modelFields.email ?? null,
          };
          promises.push(
            client.graphql({
              query: updateUniUser.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: uniUserRecord.id,
                  ...modelFieldsToSave,
                },
              },
            })
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UniUserUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              birthdate,
              weight,
              Histories,
              Reminders,
              email,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Birthdate"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={birthdate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              birthdate: value,
              weight,
              Histories,
              Reminders,
              email,
            };
            const result = onChange(modelFields);
            value = result?.birthdate ?? value;
          }
          if (errors.birthdate?.hasError) {
            runValidationTasks("birthdate", value);
          }
          setBirthdate(value);
        }}
        onBlur={() => runValidationTasks("birthdate", birthdate)}
        errorMessage={errors.birthdate?.errorMessage}
        hasError={errors.birthdate?.hasError}
        {...getOverrideProps(overrides, "birthdate")}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={weight}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              birthdate,
              weight: value,
              Histories,
              Reminders,
              email,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks("weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("weight", weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, "weight")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              birthdate,
              weight,
              Histories: values,
              Reminders,
              email,
            };
            const result = onChange(modelFields);
            values = result?.Histories ?? values;
          }
          setHistories(values);
          setCurrentHistoriesValue(undefined);
          setCurrentHistoriesDisplayValue("");
        }}
        currentFieldValue={currentHistoriesValue}
        label={"Histories"}
        items={Histories}
        hasError={errors?.Histories?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Histories", currentHistoriesValue)
        }
        errorMessage={errors?.Histories?.errorMessage}
        getBadgeText={getDisplayValue.Histories}
        setFieldValue={(model) => {
          setCurrentHistoriesDisplayValue(
            model ? getDisplayValue.Histories(model) : ""
          );
          setCurrentHistoriesValue(model);
        }}
        inputFieldRef={HistoriesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Histories"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search History"
          value={currentHistoriesDisplayValue}
          options={historiesRecords
            .filter((r) => !HistoriesIdSet.has(getIDValue.Histories?.(r)))
            .map((r) => ({
              id: getIDValue.Histories?.(r),
              label: getDisplayValue.Histories?.(r),
            }))}
          isLoading={HistoriesLoading}
          onSelect={({ id, label }) => {
            setCurrentHistoriesValue(
              historiesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentHistoriesDisplayValue(label);
            runValidationTasks("Histories", label);
          }}
          onClear={() => {
            setCurrentHistoriesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchHistoriesRecords(value);
            if (errors.Histories?.hasError) {
              runValidationTasks("Histories", value);
            }
            setCurrentHistoriesDisplayValue(value);
            setCurrentHistoriesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Histories", currentHistoriesDisplayValue)
          }
          errorMessage={errors.Histories?.errorMessage}
          hasError={errors.Histories?.hasError}
          ref={HistoriesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Histories")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              birthdate,
              weight,
              Histories,
              Reminders: values,
              email,
            };
            const result = onChange(modelFields);
            values = result?.Reminders ?? values;
          }
          setReminders(values);
          setCurrentRemindersValue(undefined);
          setCurrentRemindersDisplayValue("");
        }}
        currentFieldValue={currentRemindersValue}
        label={"Reminders"}
        items={Reminders}
        hasError={errors?.Reminders?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Reminders", currentRemindersValue)
        }
        errorMessage={errors?.Reminders?.errorMessage}
        getBadgeText={getDisplayValue.Reminders}
        setFieldValue={(model) => {
          setCurrentRemindersDisplayValue(
            model ? getDisplayValue.Reminders(model) : ""
          );
          setCurrentRemindersValue(model);
        }}
        inputFieldRef={RemindersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Reminders"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Reminder"
          value={currentRemindersDisplayValue}
          options={remindersRecords
            .filter((r) => !RemindersIdSet.has(getIDValue.Reminders?.(r)))
            .map((r) => ({
              id: getIDValue.Reminders?.(r),
              label: getDisplayValue.Reminders?.(r),
            }))}
          isLoading={RemindersLoading}
          onSelect={({ id, label }) => {
            setCurrentRemindersValue(
              remindersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentRemindersDisplayValue(label);
            runValidationTasks("Reminders", label);
          }}
          onClear={() => {
            setCurrentRemindersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchRemindersRecords(value);
            if (errors.Reminders?.hasError) {
              runValidationTasks("Reminders", value);
            }
            setCurrentRemindersDisplayValue(value);
            setCurrentRemindersValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Reminders", currentRemindersDisplayValue)
          }
          errorMessage={errors.Reminders?.errorMessage}
          hasError={errors.Reminders?.hasError}
          ref={RemindersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Reminders")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              birthdate,
              weight,
              Histories,
              Reminders,
              email: value,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || uniUserModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || uniUserModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
