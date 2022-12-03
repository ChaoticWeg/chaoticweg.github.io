import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: any;
}

type EBP = ErrorBoundaryProps;
type EBS = ErrorBoundaryState;

export default class ErrorBoundary extends Component<EBP, EBS> {
    state: ErrorBoundaryState = {
        hasError: false
    };

    constructor(props: ErrorBoundaryProps) {
        super(props);
    }

    static getDerivedStateFromError(error: any): Partial<ErrorBoundaryState> {
        return { hasError: true, error };
    }

    render() {
        const { hasError, error } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <pre>{error.message || JSON.stringify(error)}</pre>;
        } else {
            return children;
        }
    }
}
