﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Semya12
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Датчик.
    /// </summary>
    // *** Start programmer edit section *** (Датчик CustomAttributes)

    // *** End programmer edit section *** (Датчик CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДатчикE", new string[] {
            "Погрешность as \'Погрешность\'",
            "Производ as \'Производ\'",
            "id as \'Id\'"})]
    public class Датчик : ICSSoft.STORMNET.DataObject
    {
        
        private double fПогрешность;
        
        private string fПроизвод;
        
        private int fНомерД;
        
        private IIS.Semya12.Контроллер fКонтроллер;
        
        // *** Start programmer edit section *** (Датчик CustomMembers)

        // *** End programmer edit section *** (Датчик CustomMembers)

        
        /// <summary>
        /// НомерД.
        /// </summary>
        // *** Start programmer edit section *** (Датчик.НомерД CustomAttributes)

        // *** End programmer edit section *** (Датчик.НомерД CustomAttributes)
        public virtual int НомерД
        {
            get
            {
                // *** Start programmer edit section *** (Датчик.НомерД Get start)

                // *** End programmer edit section *** (Датчик.НомерД Get start)
                int result = this.fНомерД;
                // *** Start programmer edit section *** (Датчик.НомерД Get end)

                // *** End programmer edit section *** (Датчик.НомерД Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Датчик.НомерД Set start)

                // *** End programmer edit section *** (Датчик.НомерД Set start)
                this.fНомерД = value;
                // *** Start programmer edit section *** (Датчик.НомерД Set end)

                // *** End programmer edit section *** (Датчик.НомерД Set end)
            }
        }
        
        /// <summary>
        /// Погрешность.
        /// </summary>
        // *** Start programmer edit section *** (Датчик.Погрешность CustomAttributes)

        // *** End programmer edit section *** (Датчик.Погрешность CustomAttributes)
        public virtual double Погрешность
        {
            get
            {
                // *** Start programmer edit section *** (Датчик.Погрешность Get start)

                // *** End programmer edit section *** (Датчик.Погрешность Get start)
                double result = this.fПогрешность;
                // *** Start programmer edit section *** (Датчик.Погрешность Get end)

                // *** End programmer edit section *** (Датчик.Погрешность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Датчик.Погрешность Set start)

                // *** End programmer edit section *** (Датчик.Погрешность Set start)
                this.fПогрешность = value;
                // *** Start programmer edit section *** (Датчик.Погрешность Set end)

                // *** End programmer edit section *** (Датчик.Погрешность Set end)
            }
        }
        
        /// <summary>
        /// Производ.
        /// </summary>
        // *** Start programmer edit section *** (Датчик.Производ CustomAttributes)

        // *** End programmer edit section *** (Датчик.Производ CustomAttributes)
        [StrLen(255)]
        public virtual string Производ
        {
            get
            {
                // *** Start programmer edit section *** (Датчик.Производ Get start)

                // *** End programmer edit section *** (Датчик.Производ Get start)
                string result = this.fПроизвод;
                // *** Start programmer edit section *** (Датчик.Производ Get end)

                // *** End programmer edit section *** (Датчик.Производ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Датчик.Производ Set start)

                // *** End programmer edit section *** (Датчик.Производ Set start)
                this.fПроизвод = value;
                // *** Start programmer edit section *** (Датчик.Производ Set end)

                // *** End programmer edit section *** (Датчик.Производ Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Semya12.Контроллер.
        /// </summary>
        // *** Start programmer edit section *** (Датчик.Контроллер CustomAttributes)

        // *** End programmer edit section *** (Датчик.Контроллер CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Контроллер"})]
        public virtual IIS.Semya12.Контроллер Контроллер
        {
            get
            {
                // *** Start programmer edit section *** (Датчик.Контроллер Get start)

                // *** End programmer edit section *** (Датчик.Контроллер Get start)
                IIS.Semya12.Контроллер result = this.fКонтроллер;
                // *** Start programmer edit section *** (Датчик.Контроллер Get end)

                // *** End programmer edit section *** (Датчик.Контроллер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Датчик.Контроллер Set start)

                // *** End programmer edit section *** (Датчик.Контроллер Set start)
                this.fКонтроллер = value;
                // *** Start programmer edit section *** (Датчик.Контроллер Set end)

                // *** End programmer edit section *** (Датчик.Контроллер Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДатчикE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДатчикE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДатчикE", typeof(IIS.Semya12.Датчик));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Датчик.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfДатчик CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfДатчик CustomAttributes)
    public class DetailArrayOfДатчик : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Semya12.DetailArrayOfДатчик members)

        // *** End programmer edit section *** (IIS.Semya12.DetailArrayOfДатчик members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Датчик by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Датчик.
        /// </summary>
        public DetailArrayOfДатчик(IIS.Semya12.Контроллер fКонтроллер) : 
                base(typeof(Датчик), ((ICSSoft.STORMNET.DataObject)(fКонтроллер)))
        {
        }
        
        public IIS.Semya12.Датчик this[int index]
        {
            get
            {
                return ((IIS.Semya12.Датчик)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Semya12.Датчик dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
