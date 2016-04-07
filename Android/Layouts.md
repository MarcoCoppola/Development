# Android Layouts

1. [FrameLayout](#framelayout)
2. [LinearLayout](#linearlayout)
3. [TableLayout](#tablelayout)
4. [GridLayout](#gridlayout)
5. [RelativeLayout](#relativelayout)
6. [ScrollView](#ScrollView)

---
##FrameLayout

---

## LinearLayout

---

## TableLayout
Table Row is always MATCH_PARENT in width and WRAP_CONTENT in height.

Number of columns in the TableLayout is decided by the Table Row having maximum Views.

Column width automatically adjusts based on the size of the column with maximum width.


| Attribute | Apply to | What does it do ? | What values can it have? |
| --------- | -------- | ----------------- | ------------------------ |
| `android:stretchColumns` | TableLayout | Stretch either 1 column or a set of columns or all columns [ Column Indices start with 0] | `android:stretchColumns="0"` `android:stretchColumns="1,2"` `android:stretchColumns="*"` |
| `android:shrinkColumns` | TableLayout | Remove unnecessary extra space from a column and shrink it [Column Indices start with 0] | `android:shrinkColumns="0"` `android:shrinkColumns="1,2"` `android:shrinkColumns="*"` |
| `android:layout_span` | Any child View inside Table Row | Makes that View span multiple columns specified by the number in layout_span | `android:layout_span="2"` Make this View 2 columns wide |
| `android:layout_column` | Any child View inside Table Row | The index of the column inside which this child View should appear |  `android:layout_column="2"` Make this View appear inside the column with index 2 |
| `android:collapseColumns` | TableLayout | The index of the columns that you want to hide | `android:collapseColumns="2"` Hide the column whose index=2 |

---

## GridLayout

---

## RelativeLayout

---

## ScrollView

``` xml
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fillViewport="true">
    
    <!-- Include layout -->
    
</ScrollView>
```

