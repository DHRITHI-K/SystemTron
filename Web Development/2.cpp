// // Your First C++ Program

// #include <iostream>

// int main() {
//     std::cout << "Hello World!";
//     return 0;
// }



// #include <iostream>
// #include <vector>
// #include <algorithm>

// using namespace std;

// struct Item {
//     int weight;
//     int value;
//     double ratio; // value-to-weight ratio
// };

// bool compare(Item a, Item b) {
//     return a.ratio > b.ratio;
// }

// double fractionalKnapsack(int capacity, vector<Item>& items) {
//     sort(items.begin(), items.end(), compare);

//     double totalValue = 0.0;

//     for (const auto& item : items) {
//         if (capacity >= item.weight) {
//             totalValue += item.value;
//             capacity -= item.weight;
//         } else {
//             // Take a fraction of the item
//             double fraction = static_cast<double>(capacity) / item.weight;
//             totalValue += fraction * item.value;
//             break; // Knapsack is full
//         }
//     }

//     return totalValue;
// }

// int main() {
//     int n; // number of items
//     cout << "Enter the number of items: ";
//     cin >> n;

//     vector<Item> items(n);

//     cout << "Enter the weight and value of each item:" << endl;
//     for (int i = 0; i < n; ++i) {
//         cin >> items[i].weight >> items[i].value;
//         items[i].ratio = static_cast<double>(items[i].value) / items[i].weight;
//     }

//     int capacity;
//     cout << "Enter the knapsack capacity: ";
//     cin >> capacity;

//     double maxValue = fractionalKnapsack(capacity, items);

//     cout << "Maximum value in the knapsack: " << maxValue << endl;

//     return 0;
// }

