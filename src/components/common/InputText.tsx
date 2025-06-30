import { InputStatus, InputType } from '@/constants/input.constant';
import { Form, Input, InputProps } from 'antd';
import { FormItemLayout } from 'antd/es/form/Form';
import trim from 'lodash/trim';
import { Control, Controller } from 'react-hook-form';

interface CustomInput extends InputProps {
  control: Control;
  name: string;
  label?: string;
  defaultValue?: string | number;
  required?: boolean;
  layout?: FormItemLayout;
}

function InputText(props: CustomInput) {
  const {
    control,
    type,
    name,
    defaultValue = '',
    label,
    required,
    layout,
    onChange,
    onBlur,
    ...rest
  } = props;

  const InputComponent = type === 'password' ? Input.Password : Input;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        const { message = '' } = fieldState.error || {};
        const status = message ? InputStatus.ERROR : '';
        return (
          <Form.Item
            label={label}
            validateStatus={status}
            help={message}
            required={required}
            layout={layout || 'vertical'}
          >
            <InputComponent
              {...field}
              {...rest}
              type={type === InputType.NUMBER ? InputType.NUMBER : InputType.TEXT}
              onChange={(...agrs) => {
                if (onChange) {
                  onChange(...agrs);
                }
                field.onChange(...agrs);
              }}
              onBlur={(event) => {
                if (onBlur) {
                  onBlur(event);
                }
                field.onChange(trim(event.target.value));
                field.onBlur();
              }}
            />
          </Form.Item>
        );
      }}
    />
  );
}

export default InputText;
