#include <iostream>
using namespace std;

extern "C" { 
  int* get_int_addr();
}

extern "C" { 
  void print_var();
}

int a = 17;

int* get_int_addr(){
  return &a;
}

void print_var () {
  cout << " value is: " << a << endl;
}