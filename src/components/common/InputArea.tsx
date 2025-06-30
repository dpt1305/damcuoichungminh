import { InputStatus } from '@/constants/input.constant';
import { Form, Input } from 'antd';
import { FormItemLayout } from 'antd/es/form/Form';
import { TextAreaProps } from 'antd/lib/input';
import trim from 'lodash/trim';
import { Control, Controller } from 'react-hook-form';

interface CustomInputArea extends TextAreaProps {
  control: Control;
  name: string;
  label?: string;
  defaultValue?: string | number;
  required?: boolean;
  layout?: FormItemLayout;
}

function InputArea(props: CustomInputArea) {
  const {
    control,
    name,
    defaultValue = '',
    label,
    required,
    layout,
    onChange,
    onBlur,
    ...rest
  } = props;

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
            <Input.TextArea
              {...field}
              {...rest}
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

export default InputArea;
