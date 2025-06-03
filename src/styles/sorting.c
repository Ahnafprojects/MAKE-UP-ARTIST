#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define MAX 100000

int comparison = 0, swapping = 0;

void resetCounter() {
    comparison = 0;
    swapping = 0;
}

void generateRandom(int arr[], int n) {
    for (int i = 0; i < n; i++)
        arr[i] = rand() % 100000;
}

// ========== 1. Selection Sort ==========
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int min = i;
        for (int j = i+1; j < n; j++) {
            comparison++;
            if (arr[j] < arr[min])
                min = j;
        }
        if (min != i) {
            int temp = arr[i]; arr[i] = arr[min]; arr[min] = temp;
            swapping++;
        }
    }
}

// ========== 2. Insertion Sort ==========
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > key) {
            comparison++;
            arr[j + 1] = arr[j];
            j--;
            swapping++;
        }
        comparison++;
        arr[j + 1] = key;
    }
}

// ========== 3. Bubble Sort ==========
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            comparison++;
            if (arr[j] > arr[j+1]) {
                int temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp;
                swapping++;
            }
        }
    }
}

// ========== 4. Shell Sort ==========
void shellSort(int arr[], int n) {
    for (int gap = n/2; gap > 0; gap /= 2) {
        for (int i = gap; i < n; i++) {
            int temp = arr[i], j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
                comparison++;
                swapping++;
            }
            comparison++;
            arr[j] = temp;
        }
    }
}

// ========== 5. Merge Sort ==========
void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int *L = malloc(n1 * sizeof(int));
    int *R = malloc(n2 * sizeof(int));
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        comparison++;
        if (L[i] <= R[j])
            arr[k++] = L[i++];
        else {
            arr[k++] = R[j++];
            swapping++;
        }
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
    free(L); free(R);
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l)/2;
        mergeSort(arr, l, m);
        mergeSort(arr, m+1, r);
        merge(arr, l, m, r);
    }
}

// ========== 6. Quick Sort ==========
int partition(int arr[], int low, int high) {
    int pivot = arr[high], i = low - 1;
    for (int j = low; j < high; j++) {
        comparison++;
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            swapping++;
        }
    }
    int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
    swapping++;
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int p = partition(arr, low, high);
        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high);
    }
}

// ========== Main Program ==========
int main() {
    int n, choice;
    int data[MAX], backup[MAX];
    time_t start, end;
    double elapsed;

    printf("Masukkan jumlah data (minimal 30000): ");
    scanf("%d", &n);
    if (n < 30000) {
        printf("Jumlah data harus minimal 30000!\n");
        return 1;
    }

    srand(time(NULL));
    generateRandom(data, n);

    do {
        printf("\n=== MENU SORTING ===\n");
        printf("1. Selection Sort\n");
        printf("2. Insertion Sort\n");
        printf("3. Bubble Sort\n");
        printf("4. Shell Sort\n");
        printf("5. Merge Sort\n");
        printf("6. Quick Sort\n");
        printf("0. Keluar\n");
        printf("Pilih metode sorting (0-6): ");
        scanf("%d", &choice);

        if (choice < 0 || choice > 6) {
            printf("Pilihan tidak valid!\n");
            continue;
        }
        if (choice == 0) break;

        for (int i = 0; i < n; i++) backup[i] = data[i];
        resetCounter();

        time(&start);
        switch (choice) {
            case 1: selectionSort(backup, n); break;
            case 2: insertionSort(backup, n); break;
            case 3: bubbleSort(backup, n); break;
            case 4: shellSort(backup, n); break;
            case 5: mergeSort(backup, 0, n - 1); break;
            case 6: quickSort(backup, 0, n - 1); break;
        }
        time(&end);

        elapsed = difftime(end, start);
        printf("Waktu komputasi: %.2f detik\n", elapsed);
        printf("Jumlah pembandingan (C): %d\n", comparison);
        printf("Jumlah penukaran (S): %d\n", swapping);

    } while (choice != 0);

    printf("Program selesai.\n");
    return 0;
}
                