#include <iostream>

extern "C" { 
  int* get_int_addr();
}

int a = 17;

int* get_int_addr(){
  return &a;
}