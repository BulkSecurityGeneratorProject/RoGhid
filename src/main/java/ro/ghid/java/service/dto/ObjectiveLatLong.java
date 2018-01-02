package ro.ghid.java.service.dto;

public class ObjectiveLatLong {

    public ObjectiveLatLong(Long id, Double latitude, Double longitude) {

        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    private Long id;

    private Double latitude;

    private Double longitude;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }



}
