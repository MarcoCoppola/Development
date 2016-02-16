# Android Layouts

1. [FrameLayout](#framelayout)
1. [LinearLayout](#linearlayout)
1. [TableLayout](#tablelayout)
1. [GridLayout](#gridlayout)
1. [RelativeLayout](#relativelayout)

---
##FrameLayout

---

## LinearLayout

---

## TableLayout
### Table Row
Table Row is always MATCH_PARENT in width and WRAP_CONTENT in height.

| Attribute | Apply to | What does it do ? | What values can it have? |
| --------- | -------- | ----------------- | ------------------------ |
| `android:layout_span` | Any child View inside Table Row | Makes that View span multiple columns specified by the number in layout_span | `android:layout_span="2"` Make this View 2 columns wide |
| `android:layout_column` | Any child View inside Table Row | The index of the column inside which this child View should appear |  `android:layout_column="2"` Make this View appear inside the column with index 2 |
| `android:collapseColumns` | TableLayout | The index of the columns that you want to hide | `android:collapseColumns="2"` Hide the column whose index=2 |

---

## GridLayout

---

## RelativeLayout