import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../ui/device";
import { useForm } from "react-hook-form";
import { useRegister } from "./useRegister";
import { ModelAuth } from "../../ui/ModelAuth";
import { Input } from "../../ui/Input";
import {
  AlignCenter,
  Button,
  Error,
  H1,
  NavLink,
  StyledSign,
} from "../../ui/AuthStyles";

export function Register() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { signUp, isLoading } = useRegister();
  const { errors } = formState;
  async function onSubmit(data) {
    try {
      console.log(data);
      await signUp(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ModelAuth>
      <div>
        <H1>Sign up</H1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            type="text"
            placeholder="Username"
            id="userName"
            {...register("userName", {
              required: "This field is required",
            })}
          />
          {errors.email && <Error>{errors?.userName?.message}</Error>}
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email"
            id="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
          {errors.email && <Error>{errors?.email?.message}</Error>}
          <Input
            type="password"
            placeholder="Password"
            id="password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password needs a minimum of 6 characters",
              },
            })}
          />
          {errors.password && <Error>{errors?.password?.message}</Error>}
          {/* <Input
                type="password"
                placeholder="password Confirm"
                id="passwordConfirm"
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().password || "Passwords need to match",
                })}
              />
              {errors.passwordConfirm && (
                <Error>{errors?.passwordConfirm?.message}</Error>
              )} */}
        </div>
        <div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign up"}
          </Button>
        </div>
      </form>

      <StyledSign>
        <AlignCenter>
          <div>
            <p>Already have a account?</p>
          </div>
          <div>
            &nbsp; <NavLink to="/sign-in"> Sign in now.</NavLink>
          </div>
        </AlignCenter>
      </StyledSign>
    </ModelAuth>
  );
}
