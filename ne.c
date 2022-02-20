#include <stdio.h> //to use input output functions

#include <unistd.h> //provides access to the POSIX OS API

int main()
{

    int x;

    x = 100;
    int r = fork();

    if (r < 0)
    {

        fprintf(stderr, "Error");
    }

    else if (r == 0)
    {

        printf("The child process\n");

        x = 150; // changes value of x to 150

        printf("The value of x in the child process: %d\n", x);
    }

    else
    {

        printf("The parent process\n");

        x = 200; // changes value of x to 200

        printf("The value of x in the parent process: %d\n", x);
    }
}
