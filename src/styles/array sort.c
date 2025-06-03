#include <stdio.h>
#include <stdlib.h>

#define SIZE 10

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

// ===== 1. Shell Sort =====
void shellSort(int arr[], int n) {
    for (int gap = n / 2; gap > 0; gap /= 2) {
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                arr[j] = arr[j - gap];
            arr[j] = temp;
        }
    }
}

// ===== 2. Merge Sort =====
void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    int* L = (int*)malloc(n1 * sizeof(int));
    int* R = (int*)malloc(n2 * sizeof(int));

    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];

    free(L);
    free(R);
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

// ===== 3. Quick Sort =====
int partition(int arr[], int low, int high) {
    int pivot = arr[high], i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }
    int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int p = partition(arr, low, high);
        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high);
    }
}

// ===== Main Program =====
int main() {
    int pilihan;
    int data[SIZE] = {95, 23, 56, 12, 41, 59, 19, 72, 57, 29};
    int arr[SIZE];

    do {
        printf("\n=== Menu Pengurutan Array ===\n");
        printf("1. Shell Sort\n");
        printf("2. Merge Sort\n");
        printf("3. Quick Sort\n");
        printf("0. Keluar\n");
        printf("Pilih algoritma (0-3): ");
        scanf("%d", &pilihan);

        for (int i = 0; i < SIZE; i++)  // Copy data awal ke arr
            arr[i] = data[i];

        switch (pilihan) {
            case 1:
                printf("Sebelum diurutkan:\n");
                printArray(arr, SIZE);
                shellSort(arr, SIZE);
                printf("Setelah diurutkan (Shell Sort):\n");
                printArray(arr, SIZE);
                break;

            case 2:
                printf("Sebelum diurutkan:\n");
                printArray(arr, SIZE);
                mergeSort(arr, 0, SIZE - 1);
                printf("Setelah diurutkan (Merge Sort):\n");
                printArray(arr, SIZE);
                break;

            case 3:
                printf("Sebelum diurutkan:\n");
                printArray(arr, SIZE);
                quickSort(arr, 0, SIZE - 1);
                printf("Setelah diurutkan (Quick Sort):\n");
                printArray(arr, SIZE);
                break;

            case 0:
                printf("Keluar dari program.\n");
                break;

            default:
                printf("Pilihan tidak valid. Silakan coba lagi.\n");
        }

    } while (pilihan != 0);

    return 0;
}
