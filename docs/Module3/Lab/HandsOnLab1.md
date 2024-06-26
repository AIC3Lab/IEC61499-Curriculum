---
sidebar_position: 1
---

# Hands on Lab 1: Learning IEC 61499 and EcoStruxure Automation Expert

This lab can be performed in class during a pre-booked lab session or at home.

## Objectives

- Getting hands-on experience on EcoStruxure: creating, compiling, testing, and modifying a basic function block type.
- Learning how to use an instance of a basic function block in a composite function block type.
- Testing and debugging basic function blocks and IEC 61499 applications.
- Executing distributed remote applications (FLASHER).

## Expected Outcome

Demonstrate the ability of running distributed applications in EcoStruxure Automation Expert.

## Submission

This lab guides you through the process of creating and running several function block applications within the solutions Tutorial and Flasher. Upon completion, submit the resulting solutions via MyCourses, first archived using EcoStruxure and then combined into a single ZIP archive.

## Installation of EcoStruxure

EcoStruxure Automation Expert software installation on Windows is supported by the corresponding installer packages. Please download and install the tool, noting that it operates only on Windows.

## Function Block Architecture: Basic Artifact

### Creating a New Basic Function Block Type in EcoStruxure

In EcoStruxure, a function block type can only be created within a solution, analogous to a project in other programming environments.

1. **Creating a New Solution**: In the New Solution window, select "EcoStruxure Automation Expert - Full Solution (Windows HMI)" and name it 'Tutorial'. After entering your information in the 'Properties' window, click 'Finish'.
   ![Creating a New Solution](#)
2. **Creating a Basic Function Block Type**: In the solution explorer tree, right-click on 'Basic' and select 'New Item'. Name this function block type 'X2Y2'.
   ![Creating a Basic Function Block Type](#)

### Modifying the Function Block Interface

1. **Interface Adjustments**: Modify the event and data interfaces by deleting unnecessary inputs and renaming others to suit the application needs.
   ![Modifying Interface of the Created FB Type](#)
2. **Creating Associations**: For any new inputs, create associations between event inputs/outputs and data inputs/outputs.
   ![Creating Association Between Events and Inputs](#)

### Editing ECC and Algorithms

1. **Editing ECC**: Delete the 'INIT' state and any unnecessary algorithms.
   ![Delete State INIT in ECC](#)
2. **Editing Algorithms**: Focus on the 'REQ' algorithm for your function block's operation.
   ![Edit the REQ Algorithm](#)

### Testing the Function Block

Use the Debug tab to run and test the function block, assigning values to inputs and triggering events.

1. **Running the Debugging Process**: Initiate debugging and observe the results.
   ![Running the Debugging Process](#)
2. **Setting Values and Triggering Events**: Input values and trigger events to test functionality.
   ![Setting Values to the Inputs of the Function Block](#)

### Creating a Composite Function Block

Create a new composite function block type and define its interface.

1. **Creating a Composite FB**: Define the interface for a new composite function block named X2Y2_CMP.
   ![Creating a Composite FB](#)
2. **Adding FBs into a Composite Network**: Include various function blocks like 'ADD', 'SUB', 'MUL', and your custom FBs.
   ![Composite Block Network of X2Y2_CMP](#)

## Advanced Topics of Function Blocks

### Creating an Application and Mapping a FB to a Device/Resource

For complex applications, deploy and run the function block on a device.

1. **Mapping FBs to a Resource**: Assign function blocks to specific resources in your system.
   ![Mapping FBs to a Resource](#)
2. **Adding New Devices**: Add new devices to your system configuration.
   ![The New Device Addition](#)

## Deployment and Running

Deploy and test your solution on a soft PLC running on a local machine.

1. **Deployment Process**: Set up devices, compile, and start runtime simulations.
   ![Starting Runtime Simulation](#)
2. **Watching Variables**: Monitor and interact with variables during runtime.
   ![Observing Values of Variables](#)
3. **Running the HMI Panel**: Log in and interact with the HMI panel.
   ![Running the HMI Panel](#)
