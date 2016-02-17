package it.marco.oraricircumvesuviana.helper;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class DateTime
{
    private Date date;

    private int day;
    private int month;
    private int year;


    private DateTime(final Date date)
    {
        this.date = date;

        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        year = cal.get(Calendar.YEAR);
        month = cal.get(Calendar.MONTH) + 1;
        day = cal.get(Calendar.DAY_OF_MONTH);
    }

    public static DateTime create(final Date date)
    {
        return new DateTime(date);
    }

    /**
     *
     * @param date Format dd/MM/yyyy
     * @return
     * @throws ParseException
     */
    public DateTime dateFromString(final String date) throws ParseException
    {
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");

        return new DateTime(dateFormat.parse(date));
    }

    public String getMonth()
    {
        return getMonthName(month);
    }


    private String getMonthName(int month)
    {
        String[] months = {"Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"};
        Map<Integer, String> map = new HashMap<Integer, String>();
        for (int i = 0; i < months.length; i++)
        {
            map.put(i, months[i]);
        }

        return map.get(month);
    }

    public Date getDate()
    {
        return date;
    }
}
