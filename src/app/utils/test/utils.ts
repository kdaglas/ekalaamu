import {ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

export const queryByCss = (
  fixture: ComponentFixture<any>,
  className: string,
) => {
  return fixture.debugElement.query(By.css(className));
};

export const queryAllByCss = (
  fixture: ComponentFixture<any>,
  className: string
) => {
  return fixture.debugElement.queryAll(By.css(className));
};

export const triggerEvent = (
  debugElement: DebugElement,
  eventName: string,
  eventObj: any,
) => {
  debugElement.triggerEventHandler(eventName, eventObj);
};
