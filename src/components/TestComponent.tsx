
import React from "react";

type TestComponentProps = { num: number };

export const TestComponent = ({num}: TestComponentProps) => <h1>Total Number: {num}</h1>;